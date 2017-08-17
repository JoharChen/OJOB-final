$(document).ready(details());
function details() {
    $.get(`alljobs/${window.location.href.split('?id=')[1]}`, function (data) {
        let result = data;
        console.log(result);
        let str = `<div class="job-brief-top">
                        <p class="detail-conpany"><span>${result.company}</span>招聘</p>
                        <p class="detail-jobs-description"><span>职位描述 :</span>${result.position}</p>

                        <!--发布时间-->
                        <div><span><i class="	glyphicon glyphicon-time"></i>  ${result.expiry_date}</span> 发布于 CODING GIRLS CLUB</div>
                        <!--招聘截止时间-->
                        <div class="deadline">截止时间: <span>${result.release_date}</span></div>
                    </div>
                    <div class="detail-jobs-order">${result.description}</div>`;
        $('#detail-job-box').empty();
        $('#detail-job-box').append(str);
        $.get(`/relation/${data.id}`, function (job) {
            console.log(job);
            let str = '';
            for (let j = 0; j < 4; j++) {
                str += `<div class="detail-jobs-small-box">
                        <div>
                            <div class="detail-jobs-small-box-left"><img src="images/code.png" alt="" class="like-img"></div>
                            <div class="detail-jobs-small-box-right">
                                <ul>
                                    <li class="like-position">${job[j].position}</li>
                                    <li class="like-type">${job[j].type}</li>
                                    <li class="like-address">${job[j].country}${job[j].city}</li>
                                    <li class="like-more"><a href="../detail.html?id=${job[j].id}" class="btn btn-link" id=${job[j].id}><span class="glyphicon glyphicon-chevron-right"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>`;
            }
            $('#like-jobs').append(str);
        });
    });
}

$('#like-jobs').on('click','.btn',function () {
    let id = $(this).attr('id');
    details();
});