
								<tr>
									<td><em class="<%=__i < 3 ? 'red' : ''%>"><%=__i+1%></em></td>
									<td><a href="http://cs.sports.163.com/team/<%= pitem.teamId %>/" target="_blank"><p><%=pitem.nameCn%></p></a></td>
									<td class="txtalign_c"><%=pitem.teamPoints%></td>
									<td class="txtalign_r"><%= pitem.win%>/<%= pitem.draw%>/<%= pitem.loss%></td>
								</tr>
							