# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-05-14 22:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tool',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('createDate', models.DateTimeField(auto_now_add=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('brand', models.CharField(max_length=120)),
                ('dueDate', models.DateTimeField(blank=True, null=True)),
                ('imgUrl', models.CharField(max_length=120)),
                ('active', models.BooleanField(default=True)),
                ('featured', models.BooleanField(default=True)),
            ],
        ),
    ]
