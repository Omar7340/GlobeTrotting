from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework.authtoken.models import Token

@api_view(['POST'])
def registration_view(request):
  if request.method == 'POST':
    serializer = UserSerializer(data=request.data)
    data = {}
    if serializer.is_valid():
      user = serializer.save()
      data['response'] = "User enregistré"
      data['email'] = user.email
      data['username'] = user.username
      data['bio'] = user.bio
      data['token'] = Token.objects.get(user=user).key

    else:
      data = serializer.errors
    
    return Response(data)
