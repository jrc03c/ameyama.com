---
permalink: /
layout: page
title: Blog
---

<table>
	<tbody>
	{% for post in site.posts %}
		<tr>
			<td class="blogroll-table-left">
				{{ post.date | date: "%F" }}
			</td>

			<td class="blogroll-table-right">
				<a href="{{ post.url }}">{{ post.title }}</a>
			</td>
		</tr>
	{% endfor %}
	</tbody>
</table>
