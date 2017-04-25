# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse

def index(request):
	return render(request, 'dashboard/index.html')

def get_nodes(request):
	subnet = request.GET.get('subnet')
	print 'xxxxxxxxxxxxxxxxxxx'
	print subnet
	return HttpResponse('')