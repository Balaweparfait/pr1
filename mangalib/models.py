from django.db import models

# Create your models here.
# class admin (models.Model):
#     name_admin =models.CharField(max_length=25)
#     email_admin =models.EmailField(max_length=25, unique=True)
class users (models.Model):
    name =models.CharField(max_length=25, verbose_name="Nom")
    physic_adress_user =models.CharField(max_length=25, verbose_name="Adresse physique")
    email_user =models.EmailField(max_length=25, unique=True, verbose_name="Email")
    tel_user =models.IntegerField(unique=True, verbose_name="Contact")

    def __str__(self):
        return self.name
    

    class Meta:
        verbose_name="utilisateur"
        verbose_name_plural="utilisateurs"


class produits(models.Model):
    title_product= models.CharField(max_length=30, unique=True, verbose_name="Titre" )
    type= models.CharField(max_length=30, verbose_name="Type")
    quantity= models.IntegerField(verbose_name="Quantite")
    prix= models.IntegerField(verbose_name="Prix")
    descript_product= models.CharField(max_length=255, verbose_name="Description")

    def __str__(self):
        return self.title_product

    # class Meta:
    #     verbose_name="product"    
    #     verbose_name_plur="product"    

class services(models.Model):
    title_service= models.CharField(max_length=30, unique=True, verbose_name="Titre")
    type_service= models.CharField(max_length=30, verbose_name="Type de service")
    prix_service= models.IntegerField(verbose_name="Prix")
    descript_service= models.CharField(max_length=255, verbose_name="Description" )

    def __str__(self):
        return self.title_service

    # class Meta:
    #     verbose_name="product"    

class Pack_service(models.Model):
    title_pack = models.CharField(max_length=25, unique=True, verbose_name="Titre")
    Price = models.IntegerField(verbose_name="prix")
    Descript_pack = models.CharField(max_length=255, verbose_name="Description" )

    def __str__(self):
        return self.title_pack