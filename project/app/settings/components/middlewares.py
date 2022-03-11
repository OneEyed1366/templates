MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    # WhiteNoise
    "whitenoise.middleware.WhiteNoiseMiddleware",
    # END Whitenoise
    'django.contrib.sessions.middleware.SessionMiddleware',
    # Localization
    'django.middleware.locale.LocaleMiddleware',
    # END Localization
    # Django cors
    'corsheaders.middleware.CorsMiddleware',
    # END Django cors
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
