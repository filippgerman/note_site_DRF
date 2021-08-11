# Generated by Django 3.2.5 on 2021-07-26 11:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0003_rename_project_project_todo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='todo',
        ),
        migrations.AddField(
            model_name='todo',
            name='project',
            field=models.ManyToManyField(to='todo.Project'),
        ),
    ]
