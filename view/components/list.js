<script id="list" type="text/html">

  {{# layui.each(d.content, function(index, item){ }}

<h2 style="margin: 10px 0">{{item.title}}</h2>
<a style="margin-bottom: 20px " href={{item.path}} target="_blank">{{item.decs}}</a>
{{#  }) }}

</script>