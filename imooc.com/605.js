
{@if data.length > 0}
<div class='v-course-wrap'>
    <h3>$${title}</h3>
    <div class='v-course-list clearfix'>
        {@each data as item}
        {@if item.course_type == 'MF'}
        <a class='v-course' href='/learn/$${item.id}' target='_blank'>
        {@else if item.course_type == 'XK'}
        <a class='v-course' href='/course/introduction/id/$${item.id}' target='_blank'>
        {@else if item.course_type == 'SZ'}
        <a class='v-course' href='http://coding.imooc.com/class/${item.id}.html' target='_blank'>
        {@else if item.course_type == 'LJ'}
        <a class='v-course' href='http://class.imooc.com/sc/${item.id}' target='_blank'>
        {@/if}
            <img src='$${item.pic}' />

            <div class='v-course-name'>$${item.name}</div>
            <div class='v-course-info clearfix'>
                {@if item.course_type}
                    <span>
                        {@if item.course_type == 'MF'}
                            免费
                        {@else if item.course_type == 'XK'}
                            慕课微课
                        {@else if item.course_type == 'SZ'}
                            实战
                        {@else if item.course_type == 'LJ'}
                            就业班
                        {@/if}
                    </span>
                {@/if}
                {@if item.easy_type}
                    <span>$${item.easy_type}</span>
                {@/if}
                <span><i class='imv2-set-sns'></i>$${item.numbers}</span>
            </div>
        </a>     
        {@/each}        
    </div>
</div>
{@/if}
