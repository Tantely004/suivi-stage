from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from cryptography.fernet import Fernet
import os
from dotenv import load_dotenv

# Charger la clé de chiffrement depuis .env
load_dotenv()
SECRET_KEY_ENCRYPTION = os.getenv("SECRET_KEY_ENCRYPTION")

# Fonction de chiffrement
def encrypt_data(data):
    if SECRET_KEY_ENCRYPTION:
        cipher_suite = Fernet(SECRET_KEY_ENCRYPTION.encode())
        return cipher_suite.encrypt(data.encode()).decode()
    return data

# Fonction de déchiffrement
def decrypt_data(encrypted_data):
    if SECRET_KEY_ENCRYPTION:
        cipher_suite = Fernet(SECRET_KEY_ENCRYPTION.encode())
        return cipher_suite.decrypt(encrypted_data.encode()).decode()
    return encrypted_data

# Modèle utilisateur avec rôle
class User(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('tuteur', 'Tuteur'),
        ('stagiaire', 'Stagiaire'),
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    groups = models.ManyToManyField(
        Group,
        related_name="stagiaires_users",  # Évite le conflit avec auth.User.groups
        blank=True,
    )

    user_permissions = models.ManyToManyField(
        Permission,
        related_name="stagiaires_user_permissions",  # Évite le conflit avec auth.User.user_permissions
        blank=True,
    )

# Modèle Stagiaire
class Stagiaire(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    etablissement = models.CharField(max_length=255)
    filiere = models.CharField(max_length=255)
    niveau_etudes = models.CharField(max_length=100)
    encadrant_pedagogique = models.CharField(max_length=255)
    numero_contact = models.CharField(max_length=20)

    def save(self, *args, **kwargs):
        self.numero_contact = encrypt_data(self.numero_contact)  # Chiffrement du numéro
        super().save(*args, **kwargs)

    def get_numero_contact(self):
        return decrypt_data(self.numero_contact)

    def __str__(self):
        return f"{self.user.username} - {self.filiere}"

# Modèle de stage
class Stage(models.Model):
    stagiaire = models.OneToOneField(Stagiaire, on_delete=models.CASCADE)
    service = models.CharField(max_length=255, default="SIIGFP")  # Service fixe
    theme = models.CharField(max_length=255)
    date_debut = models.DateField()
    date_fin = models.DateField()
    tuteur = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, limit_choices_to={'role': 'tuteur'})
    technologies = models.TextField()
    missions = models.TextField()
    documents = models.FileField(upload_to='documents/', blank=True, null=True)  # Upload des documents

    def __str__(self):
        return f"Stage de {self.stagiaire.user.username} - {self.theme}"

# Modèle de suivi de stage
class SuiviStage(models.Model):
    stage = models.ForeignKey(Stage, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    rapport = models.TextField()
    commentaire_tuteur = models.TextField(blank=True, null=True)
    evaluation_finale = models.CharField(max_length=50, blank=True, null=True)  # Note ou appréciation

    def __str__(self):
        return f"Suivi de {self.stage.stagiaire.user.username} - {self.date}"
