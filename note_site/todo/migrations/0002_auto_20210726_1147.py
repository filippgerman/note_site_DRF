# Generated by Django 3.2.5 on 2021-07-26 11:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='project',
        ),
        migrations.AddField(
            model_name='project',
            name='project',
            field=models.ManyToManyField(to='todo.Todo'),
        ),
    ]