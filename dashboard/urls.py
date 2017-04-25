from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^nodes/', views.get_nodes, name='get_nodes'),
    # url(r'^outbound/', views.outbound_messages, name='outbound_messages'),
]