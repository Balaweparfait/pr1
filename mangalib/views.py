from django.shortcuts import render
from .models import produits, services 

def index(request):
    context={'produits': produits.objects.all(), 'services': services.objects.all()}
    # context1={'service': services.objects.all()}
    return render(request, 'Mangalib/index.html', context)

# def index(request):
#     context={'service': services.objects.all()}
#     return render(request, 'Mangalib/index.html', context)