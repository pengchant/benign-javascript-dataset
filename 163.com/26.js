
                                <tr>
                                    <%if (stock.type == 'stock'){%>
                                        <td class="stock_name">
                                            <a class="stock_link" href="http://quotes.money.163.com/<%=stock.code%>.html" _ntesquote_="code:<%=stock.code%>;attr:name;maxlen:4;sign:#2c01;">
                                                <%=stock.name%>
                                            </a>
                                        </td>
                                        <td class="stock_price">
                                            <span _ntesquote_="code:<%=stock.code%>;attr:price;fixed:2;color:updown"></span>
                                        </td>
                                        <td class="stock_percent">
                                            <span _ntesquote_="code:<%=stock.code%>;attr:percent;percent:2;color:updown"></span>
                                        </td>
                                        <td>
                                            <%if(!stock.followed){%>
                                                <a title="添加到自选股" class="stock_add" target="_self" ne-click="addFollow(stock);">+</a>
                                            <%}%>
                                        </td>
                                    <%} else if (stock.type == 'loginTip'){%>
                                        <td colspan="4" class="tip">
                                            <div class="login_tip">
                                                <span class="icon_warn"></span>查看自选股，请先<a href="javascript:;" target="_self" ne-click="showLoginPanel($event);">登录</a>
                                            </div>
                                        </td>
                                    <%} else if (stock.type == 'editStockTip'){%>
                                        <td colspan="4" class="tip">
                                            <div class="edit_tip">
                                               <a class="edit_mystock" href="http://i.money.163.com/hs/position/all.html">编辑自选股</a> 
                                            </div>
                                        </td>
                                    <%} else if (stock.type == 'addMoreHot'){%>
                                        <td colspan="4" class="tip">
                                            <div class="hot_tip">
                                              <p>以下是为您推荐的热门股票</p>
                                              <span class="icon_hot_arrow"></span>
                                            </div>
                                        </td>
                                    <%}%>
                                </tr>
                            