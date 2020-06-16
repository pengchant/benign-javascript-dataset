
										<tr>
											<td><em class="<%=__i< 3 ? 'red' : ''%>"><%=__i+1%></em></td>
											<td><a href="http://nba.sports.163.com/player/<%= pitem.playerId %>" target="_blank"><p><%=pitem.playerCn%></p></a></td>
											<td class="txtalign_c"><a href="http://nba.sports.163.com/team/<%= pitem.teamId %>" target="_blank"><p><%=pitem.teamCn%></p></a></td>
											<td class="txtalign_r"><%= pitem.point%></td>
										</tr>
									