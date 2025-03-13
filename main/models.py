from django.db import models

 #Creating database models


class Tag(models.Model): #used for search function i.e. "Python", "Cyber"
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Project(models.Model): #database model for each project
    title = models.CharField(max_length=200)
    description = models.TextField(default='No description provided')
    tags = models.ManyToManyField(Tag, related_name = "projects") #Many projects are related to Many Tags
    link = models.URLField(max_length=200, blank=True)

    def __str__(self):
        return self.title

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, related_name="images", on_delete=models.CASCADE) #delete images if project is deleted
    image = models.ImageField(upload_to="images/")
    def __str__(self):
        return f"{self.project.title} Image"
