
    			<%if(__i > 1){%>
	    			<%if(__i % 2 == 0){%>
	                <li>
	                <%}%>
	    				<a href="<%=t.link%>"><%=t.title%></a>
	    			<%if(__i % 2 != 0){%>
	                </li>
	                <%}%>
	            <%}%>
    			