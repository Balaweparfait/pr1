from django.contrib import admin
from .models import produits, services, Pack_service, users

@admin.register(produits)
class ProduitsAdmin(admin.ModelAdmin):
    # fields = ['title_product', 'prix', 'quantity']
    list_display=("title_product", "quantity", "prix")
    list_filter = ['title_product']
    search_fields = ["title_product"]
    list_per_page= 10

@admin.register(services)
class servicesAdmin(admin.ModelAdmin):
    list_display=("title_service", "type_service", "prix_service")

@admin.register(Pack_service)
class Pack_serviceAdmin(admin.ModelAdmin):
    list_display=("title_pack", "Price")


@admin.register(users)
class usersAdmin(admin.ModelAdmin):
    list_display=("name", "physic_adress_user", "email_user", "tel_user")
    list_filter=['name','physic_adress_user']



# Register your models here.
