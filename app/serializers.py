from rest_framework import serializers,compat
from .models import Contact
compat.md_filter_add_syntax_highlight = lambda md: False


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id', 'name', 'email', 'message')