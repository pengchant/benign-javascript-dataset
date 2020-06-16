
							<tr>
								<td><em class="<%=__i < 3 ? 'red' : ''%>"><%=__i+1%></em></td>
								<td><a href="http://cba.sports.163.com/team/<%=pitem.teamId%>/" target="_blank"><p><%=pitem.team%></p></a></td>
								<td class="txtalign_c"><%=pitem.winPercentDesc%></td>
								<td class="txtalign_r"><%= pitem.homeWin + pitem.awayWin %>/<%=pitem.games - pitem.homeWin - pitem.awayWin%></td>
							</tr>
						