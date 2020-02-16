FROM httpd
COPY dist /usr/local/apache2/htdocs/
# COPY ssl.conf /etc/httpd/conf.d/default.conf
# COPY example.crt /example.crt
# COPY example.key /example.key
EXPOSE 443 80 8080
