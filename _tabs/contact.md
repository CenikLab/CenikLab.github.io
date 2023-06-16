---
icon: fas fa-envelope
order: 5
---

<style>
.lab_map{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1722.6021222577829!2d-97.73711615583386!3d30.288246625904293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5833be09aa1%3A0xd598b7d8ce634aa5!2sMoffett+Molecular+Biology+Building%2C+2500+Speedway%2C+Austin%2C+TX+78712!5e0!3m2!1sen!2sus!4v1531607935665" width="100%" height="450" frameborder="0" style="border:0" class="lab_map" allowfullscreen></iframe>

<br>
**Can Cenik, PhD**<br>
[Department of Molecular Biosciences](https://molecularbiosci.utexas.edu/)   
Moffett Molecular Biology Building 2.122 
2500 Speedway  
Austin, TX 78712

{% assign email = site.social.email | split: '@' %}
{%- capture url -%}
javascript:location.href = 'mailto:' + ['{{ email[0] }}','{{ email[1] }}'].join('@')
{%- endcapture -%}
Email: <a href="{{url}}">{{site.social.email_}}</a>

Lab Phone: 512-232-2874 
