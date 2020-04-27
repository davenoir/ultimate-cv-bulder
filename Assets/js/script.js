$(function() {

        
    $("#toCategoryBtn").on('click', function() {
        location.assign('category.html');

    });


    $("#toLaika").on('click', function() {
        window.open('https://www.wearelaika.com/', '_blank');

    });

    $("#toBrainster").on('click', function() {
        window.open('https://brainster.co/', '_blank');

    });
    /********************************************HIDE/SHOW events on click *********************************/
    $("#cvBtn").addClass('active');
    $('#cvEdit').show();
    $('.imageRow').show();
    $('.cvHideShow').hide();
    $('#LaikaPages').hide();
    $('#LinkedinPages').hide();
    $('.downloadBtnCV').hide();

    $("#cvBtn").on('click', function() {
        $(this).addClass('active');
        $('#linkedinBtnShow').removeClass('active');
        $('#laikaBtnShow').removeClass('active');
        $('.imageRow').addClass('fadeInAmate');
        $('#cvEdit').show();
        $('.imageRow').show();
        $('.cvHideShow').hide();
        $('#LaikaPages').hide();
        $('#LinkedinPages').hide();
        $('.downloadBtnCV').hide();
    })


    $('#cvEdit').on('click', function() {
        $('#linkedinBtnShow').removeClass('active');
        $(this).addClass('active');
        $('.cvHideShow').addClass('fadeInAmate');
        $('.cvHideShow').show();
        $('.imageRow').hide();
        $('.downloadBtnCV').show();
    });



    $('#linkedinBtnShow').on('click', function() {
        $("#cvBtn").removeClass('active');
        $('#laikaBtnShow').removeClass('active');
        $('#cvEdit').hide();
        $(this).addClass('active');
        $('.imageRow').hide();
        $('.cvHideShow').hide();
        $('#LaikaPages').hide();
        $('#LinkedinPages').addClass('fadeInAmate');
        $('#LinkedinPages').show();
        $('.downloadBtnCV').hide();
    });
    $('#laikaBtnShow').on('click', function() {
        $("#cvBtn").removeClass('active');
        $('#linkedinBtnShow').removeClass('active');
        $('#cvEdit').hide();
        $(this).addClass('active');
        $('#LaikaPages').addClass('fadeInAmate');
        $('.imageRow').hide();
        $('.cvHideShow').hide();
        $('#LaikaPages').show();
        $('#LinkedinPages').hide();
        $('.downloadBtnCV').hide();
    });

    /********************************************END OF HIDE/SHOW EVENTS ON CLICK *********************************/


    $('form input texarea').keydown(function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    // tags generator
    $('#tagPlaces').tagsinput({
        allowDuplicates: true
    });

    // image upload cv1


    //image upload cv data science
    $("#profileImage").click(function(e) {
        $("#imageUpload").click();
    });

    function fasterPreview(uploader) {
        if (uploader.files && uploader.files[0]) {
            $('#profileImage').attr('src',
                window.URL.createObjectURL(uploader.files[0]));
        }
    }

    $("#imageUpload").change(function() {
        fasterPreview(this);
    });

    //add experience cv1
    $(document).on('click', '.addExperience', function() {
        let contents = `<div style="display: flex;">
        <i class="fa fa-remove"
            style="color: gray; margin-right: 4%; margin-left: -8%;"></i>
        <i class="fa fa-circle"
            style="color: #2CBBAD; margin-right: 1%;"></i><textarea
            class="textCv1" rows="3" cols="40"
            placeholder="Write about your experience"
            style="font-size: x-small;"></textarea>
    </div>`;
        $(this).parent().prepend(contents);
    });

    // add achievement cv1
    $(document).on('click', '.addAchievement', function() {
        let contents = `<div style="display: flex;">
        <i class="fa fa-remove"
            style="color: gray; margin-right: 4%; margin-left: -8%;"></i>
        <i class="fa fa-circle"
            style="color: #2CBBAD; margin-right: 1%;"></i><textarea class="textCv1"
            rows="3" cols="40" placeholder="Write about your achievement"
            style="font-size: x-small;"></textarea>
    </div>`;
        $(this).parent().prepend(contents);
    });

    //add another Job cv1
    $('.addJob').on('click', function() {
        let addJobBtn = $('.workPosition');
        let content = `<div class="jobContent">
        <i class="fa fa-remove"
            style="color: gray; margin-right: 4%; margin-left: -8%;"></i>
        <input class="inputCv1" type="text" placeholder="enter work position"
            style="font-weight: bold;">
        <input class="inputCv1" type="text" placeholder="enter company"
            style="font-size: smaller;">
        <div class="row">
            <div class="col-md-4">
                <input class="inputCv1" type="date" value="2019-01-01"
                    style="font-size: smaller; color:#2CBBAD;">
            </div>
            <div class="col-md-4 offset-md-1">
                <input class="inputCv1" type="text" placeholder="enter place"
                    style="font-size: smaller; color:#2CBBAD;">
            </div>
        </div>
        <br>
        <div class="experienceContent">
            <div style="display: flex;">
                <i class="fa fa-remove"
                    style="color: gray; margin-right: 4%; margin-left: -8%;"></i>
                <i class="fa fa-circle"
                    style="color: #2CBBAD; margin-right: 1%;"></i><textarea
                    class="textCv1" rows="3" cols="40"
                    placeholder="Write about your experience"
                    style="font-size: x-small;"></textarea>
            </div>
            <br>
            <div class="addExperience" style="display: flex; margin-bottom: 8%;">
                <i class='fa fa-plus-circle' style="color: #2CBBAD; font-size:12px;"
                    id="addMore"><span
                        style="font-size: xx-small; color: #2CBBAD;">Add
                        experience</span></i>
            </div>
        </div>
    </div>
</div>`;
        addJobBtn.append(content);
    });

    //add experience cv2
    $(document).on('click', '.addExperienceCv2', function() {
        let contents = `<div style="display: flex;">
        <i class="fa fa-remove"
            style="color: gray; margin-right: 4%; margin-left: -10%;"></i>
        <i class="fa fa-circle"
            style="color: gray; margin-right: 1%;"></i><textarea
            class="textCv2" rows="3" cols="40"
            placeholder="Write about your experience"
            style="font-size: x-small;"></textarea>
    </div>`;
        $(this).parent().prepend(contents);
    });

    //add job Cv2 

    $('.addJobCv2').on('click', function() {
        let addJobContent = $('.workPosition');
        let content = `<div class="jobContent">
        <i class="fa fa-remove"
            style="color: gray; margin-right: 4%; margin-left: -10%;"></i>
        <input class="inputCv2" type="text" placeholder="enter work position"
            style="font-weight: bold;">
        <input class="inputCv2" type="text" placeholder="enter company"
            style="font-size: smaller;">
        <div class="row">
            <div class="col-md-4">
                <input class="inputCv2" type="date" value="2019-01-01"
                    style="font-size: smaller; color: gray;">
            </div>
            <div class="col-md-4 offset-md-1">
                <input class="inputCv2" type="text" placeholder="enter place"
                    style="font-size: smaller; color:gray;">
            </div>
        </div>
        <br>
        <div class="experienceContent">
            <div style="display: flex;">
                <i class="fa fa-remove"
                    style="color: gray; margin-right: 4%; margin-left: -10%;"></i>
                <i class="fa fa-circle" style="color: gray; margin-right: 1%;"></i><textarea
                    class="textCv1" rows="3" cols="40"
                    placeholder="Write about your experience"
                    style="font-size: x-small;"></textarea>
            </div>
            <br>
            <div class="addExperienceCv2" style="display: flex; margin-bottom: 8%;">
                <i class='fa fa-plus-circle' style="color: gray; font-size:12px;"
                    id="addMore"><span style="font-size: xx-small; color: gray;">Add
                        experience</span></i>
            </div>
        </div>
    </div>`;
        addJobContent.append(content);
    });

    // add education cv2
    $('.addEducation').on('click', function() {
        let addJobContent = $('.education');
        let content = `<div class="educationContent">
        <i class="fa fa-remove"
            style="color: gray; margin-right: 4%; margin-left: -10%;"></i>
        <input class="inputCv2" type="text" placeholder="enter education"
            style="font-weight: bold;">
        <textarea class="textCv2" rows="2" cols="40" placeholder="enter school"
            style="font-size: x-small;"></textarea>
        <div class="row" style="margin-bottom: 3%;">
            <div class="col-md-4">
                <input class="inputCv2" type="date" value="2019-01-01"
                    style="font-size: smaller; color: gray;">
            </div>
            <div class="col-md-4 offset-md-1">
                <input class="inputCv2" type="text" placeholder="enter place"
                    style="font-size: smaller; color:gray;">
            </div>
        </div>
    </div>`;
        addJobContent.append(content);
    });

    // add education cv3
    $('.addEducationCV3').on('click', function() {
        let addJobContent = $('.education');
        let content = `<div class="educationContent">
        <i class="fa fa-remove" style="color: gray; margin-right: 4%; margin-left: -10%;"></i>
        <input class="inputCv1" type="text" placeholder="enter education" style="font-weight: bold;">
        <textarea class="textCv1" rows="2" cols="40" placeholder="enter school" style="font-size: x-small;"></textarea>
        <div class="row" style="margin-bottom: 3%;">
            <div class="col-md-4">
                <input class="inputCv1" type="date" value="2019-01-01" style="font-size: smaller; color: #2CBBAD;">
            </div>
            <div class="col-md-4 offset-md-1">
                <input class="inputCv1" type="text" placeholder="enter place" style="font-size: smaller; color:#2CBBAD;">
            </div>
        </div>
    </div>`;
        addJobContent.append(content);
    });

    //add skill
    $('.addSkill').on('click', function() {
        let addJobContent = $('.skillsDiv');
        let content = `<div class="row contentDots" style="margin-bottom: 5%;">
        <i class="fa fa-remove" style="color: gray; margin-left: -10%;"></i>
        <div class="col-md-6" style="display: flex;">
            <i class="fa fa-circle" style="color: gray; margin-right: 1%;"></i><input
                class="inputCv2" type="text" placeholder="enter skill"
                style="font-size: smaller; color:gray;">
        </div>
        <div class="col-md-6" style="display: flex;">
            <label class="container">
                <input type="checkbox" checked="checked" name="radio1">
                <span class="checkmark"></span>
            </label>
            <label class="container">
                <input type="checkbox" name="radio2">
                <span class="checkmark"></span>
            </label>
            <label class="container">
                <input type="checkbox" name="radio3">
                <span class="checkmark"></span>
            </label>
            <label class="container">
                <input type="checkbox" name="radio4">
                <span class="checkmark"></span>
            </label>
            <label class="container">
                <input type="checkbox" name="radio5">
                <span class="checkmark"></span>
            </label>
        </div>
    </div>`;
        addJobContent.append(content);
    });

    //add project
    $('.addProject').on('click', function() {
        let addJobContent = $('.projectsDiv');
        let content = `<div style="display: flex;">
        <i class="fa fa-remove"
            style="color: gray; margin-right: 4%; margin-left: -10%;"></i>
        <i class="fa fa-circle" style="color: gray; margin-right: 1%;"></i><textarea
            class="textCv2" rows="3" cols="40" placeholder="Write about your projects"
            style="font-size: x-small;"></textarea>
    </div>`;
        addJobContent.append(content);
    });

    //add language cv2
    $('.addLanguage').on('click', function() {
        let addJobContent = $('.languageDiv');
        let content = `<div class="languageContents">
        <i class="fa fa-remove"
            style="color: gray; margin-right: 4%; margin-left: -8%;"></i>
        <input class="inputCv2" type="text" placeholder="Enter language"
            style="font-weight: bold;">
        <textarea class="textCv2" rows="2" cols="40" placeholder="level of knowledge"
            style="font-size: x-small;"></textarea>
    </div>`;
        addJobContent.append(content);
    });

    // add language cv3

    $('.addLanguageCV3').on('click', function() {
        let addJobContent = $('.languageDiv');
        let content = `<div class="languageContents">
        <i class="fa fa-remove" style="color: gray; margin-right: 3%; margin-left: -8%;"></i>
        <input class="inputCv1" type="text" placeholder="Enter language" style="font-weight: bold;">
        <textarea class="textCv1" rows="2" cols="35" placeholder="level of knowledge" style="font-size: small; color: #2CBBAD;"></textarea>
    </div>`;
        addJobContent.append(content);
    });

    //add experience CV4 
    $(document).on('click', '.addExperienceCv4', function() {
        let contents = `<div style="display: flex;">
        <i class="fa fa-remove"
            style="color: gray; margin-right: 0.5%; margin-left: -5%;"></i>
        <i class="fa fa-circle"
            style="color: gray; margin-right: 1%;"></i><textarea
            class="textCv2" rows="3" cols="40"
            placeholder="Write about your experience"
            style="font-size: x-small;"></textarea>
    </div>`;
        $(this).parent().prepend(contents);
    });

    //add Job CV4
    $('.addJobCv4').on('click', function() {
        let addJobContent = $('.workPosition');
        let content = `<div class="jobContent">
        <i class="fa fa-remove"
            style="color: gray; margin-right: 0.5%; margin-left: -5%;"></i>
        <input class="inputCv2" type="text" placeholder="enter work position"
            style="font-weight: bold;">
        <input class="inputCv2" type="text" placeholder="enter company"
            style="font-size: smaller;">
        <div class="row">
            <div class="col-md-4">
                <input class="inputCv2" type="date" value="2019-01-01"
                    style="font-size: smaller; color: gray;">
            </div>
            <div class="col-md-4 offset-md-1">
                <input class="inputCv2" type="text" placeholder="enter place"
                    style="font-size: smaller; color:gray;">
            </div>
        </div>
        <br>
        <div class="experienceContent">
            <div style="display: flex;">
                <i class="fa fa-remove"
                    style="color: gray; margin-right: 0.5%; margin-left: -5%;"></i>
                <i class="fa fa-circle" style="color: gray; margin-right: 1%;"></i><textarea
                    class="textCv1" rows="3" cols="40"
                    placeholder="Write about your experience"
                    style="font-size: x-small;"></textarea>
            </div>
            <br>
            <div class="addExperienceCv4" style="display: flex; margin-bottom: 8%;">
                <i class='fa fa-plus-circle' style="color: gray; font-size:12px;"
                    id="addMore"><span style="font-size: xx-small; color: gray;">Add
                        experience</span></i>
            </div>
        </div>
    </div>`;
        addJobContent.append(content);
    });

    //add skills CV4
    $(document).on('click', '.addSkillCv4', function() {
        let contents = `<div style="display: flex;">
        <i class="fa fa-remove"
            style="color: gray; margin-right: 0.5%; margin-left: -5%;"></i>
        <i class="fa fa-circle"
            style="color: gray; margin-right: 1%;"></i><textarea
            class="textCv2" rows="2" cols="40"
            placeholder="Add your skill"
            style="font-size: x-small;"></textarea>
    </div>`;
        $(this).parent().prepend(contents);
    });

    //remove experience
    $(document).on('click', '.fa-remove', function() {
        $(this).parent().remove();
    })

    //remove job
    $(document).on('click', '.fa-remove', function() {

    })

    //remove pop-up
    $(document).on('click', '#removePopUp', function() {
        $(this).parent().parent().remove();
    });

    /*************************POPUP ON DOWNLOAD BTN***************************************************** */
    $('.downloadBtnCV').hover(function() {
        $('#popup').addClass('fadeInAmate');
        $('#popup').attr("style", "display:block");
    });
    /*****************************HOVER ON IMAGE INFO *****************************************/

    //hover on elon CV section
    $(".imageElon").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Your photo should be professional. It’s better to send a CV without a photo, that with one that makes
            you seem unserious.
            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });
    //Elon about
    $(".elonAbout").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Write your resume in the language that you would use at your workplace. This is a great chance to show
            the company’s representatives that you can express yourself. <br><br>
             Tailor the CV according to job you’re applying for. There is no ‘one size fits all’ CV – so always adapt it
            before applying to a job. <br><br>
            Write a short intro that truly represents you –not cheesy quotes, but something you truly believe in.
            Don’t put overused buzzwords, describe yourself and your capabilities with your own vocabulary.
                </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    //Elon contact
    $(".elonContact").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your
            professional email address, preferably on Gmail. Your city of living is an information that interests your
            potential employers. But don’t leave your home address. Leave a link to your LinkedIn profile. If you
            have proof of your previous job experiences online, link that too.
                    </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    //Elon work

    $(".elonWork").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Write your previous job experience and if you’re currently working, your current job titles. Explain your
            responsibilities and projects and list the tech stack and products/projects you worked on. If you were
            working in a team, let the recruiter know what your role was. <br><br> 
            Dates – a time frame in which you have been on a certain job title. If you are still working there, leave a
            hyphen ( - ). Leave your most recent experience first, and the oldest ones last.<br><br>
            Showcase your tech stack. List the stack under every previous project you have worked on, or showcase
            your projects on GitHub. The easiest way to do this is to list the stack under a previous project that you
            have worked on. Another way is to showcase your projects on GitHub.<br><br>

            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    //Elon skills
    $(".elonSkills").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Make sure you use keywords that will put the focus on your best skills. If an HR/recruiter just scans your
            CV, they will catch their attention. Highlight terms like “PHP” or “Laravel”. Space is limited,
            so don’t waste t on soft skills like leadership or communication.
            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });


    //Elon Achievements
    $(".elonAchiev").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Don’t be afraid to include a “Informal Education” section, where you can list all the courses, podcasts
            and webinars that you used to teach yourself about software development. Don’t include everything –
            just the education that is relevant and necessary for the position you are applying for.<br><br>
            Education is an important section – but be sure to select only what is relevant to the job you’re applying
            for. Write about your university degrees, relevant courses and if you have any publications, but skip the
            high and elementary school.
            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    //Elon interests
    $(".elonInter").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Lost all of the interest which are relevant only for the job you are applying,
            show that you have a great ambition to expand your horizons.
            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });
    /*******************************DATA SCIENCE********************************************** */
    $(".dataAbout").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags"> Write your resume in the language that you would use at your workplace.<br>
            It might require more work and research, but customize your CV according to the position you are
            applying for. Add small details in some places in accordance to the job description.
            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".dataPhoto").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags"> Put a photo made with a good camera. It’s better to send a CV without a photo, if you were planning on
            cropping yourself from a group photo from a dinner with friends, or a selfie in you room.
                </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".dataContact").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags"> Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your
            professional email address, preferably on Gmail. Your city of living is an information that interests your
            potential employers. Don’t leave your home address. <br><br>
            Include your LinkedIn profile link, but don’t just copy and paste the whole profile URL, shorten it.
            Add a GitHub link or personal profile link to your contact information, and make it clickable. You’re
            applying for data science jobs, so most employers are going to look at your portfolio to see what kinds of
            projects you’re working on.
            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".dataWork").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags"> Write your previous job experience, and if you’re currently working, your current job title. Explain your
            responsibilities and projects and list the tech stack and products/projects you worked on. If you were
            working in a team, let the recruiter know what your role was.
            <br>
            Dates – a time frame in which you have been on a certain job title. If you are still working there, leave a
            hyphen ( - ). Leave your most recent experience first, and the oldest ones last. We want to enable the
            reader to see what he needs to about your experience right away. Describe every job title with a few
            words about your most relevant experiences connected to the title you’re applying for.
            <br>
            <br>
            Tip: Use Action verbs to demonstrate your experience. Examples include: “applied”, “improved”,
            “implemented” etc.
            <br>
            <br>
            Tip: Speak in the third person, in bullet form. Don’t write long sentences, try to go straight to the point.
            Try to incorporate the answers to these questions: What did they commend me for? Which technologies
            and tools did I use? Did I implement a new idea?
                </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".dataEdu").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Let the recruiter know about your education, but only write the important parts – skip the high school
            and elementary, stick to the university degrees and courses relevant to the job you’re applying for.
                </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".dataSkills").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Make sure you use keywords that will put the focus on your best skills. If an HR/recruiter just scans your
            CV, they will catch their attention. Highlight terms like “Python” or “Machine learning”. Space is limited,
            so don’t waste t on soft skills like leadership or communication.
            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });
    $(".dataProjects").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">In the tech industry, the focus should be on
            what you have created. Include data analysis projects, machine learning projects, and if possible,
            published scientific articles or tutorials. <br> <br>
            Pick projects with relevance and connection to the job you’re applying for. They should demonstrate
            your technical skills and how they are applicable to solving real problems.
            <br> <br>
            Be specific about the skills, tech and tools you used, and what your role was if you’re listing group
            projects. Specify coding languages, libraries etc.
                </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });
    $(".dataLang").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use
            expressions such as “fluent in”, “speaking level of”, “native language” and similar.
                    </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });
    $(".dataInformalEdu").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags"> Don’t be afraid to include a “Informal education” where you can list all the courses, conferences,
            workshops and webinars that you used to teach yourself about digital marketing. Don’t include
            everything – just the education that is relevant and necessary for the position you are applying for.
                        </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    /**************************************DIGITAL MARKETING***************** */
    $(".digitalAbout").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Write your resume in the language that you would use at your workplace. 
            This is a great chance to show
            the company’s representatives that you can express yourself. <br><br>
            Know your unique value proposition and communicate it effectively.​ 
            You need a personal tagline that will help you stand out from everyone 
            else. This line should be the first impression the hiring manager will 
            get from you. E.g. if you’re a Content Writer, don’t just say 
            ‘’I’m a great content writer’’. Be creative and say why they should hire you to handle their content. 
           <br><br> Do your research​ in advance to create a value proposition relevant to the company you’re applying to. <br><br>
            Tailor your CV to the company and position you’re applying for. Highlight the keywords from the job specification on your CV. For example, if you’re applying for an e-commerce role, include keywords such as ‘’Conversion, bounce rate and Google Analytics’’. 
                        </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".digitalPhoto").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Put a photo that looks professional – made with a good camera and showing you in a warm light. It’s
            better to send a CV without a photo, than a photo that makes you seem unprofessional.
                            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".digitalContact").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Email, phone number and date of birth are the practical part of the assembly of a CV. 
            Enter your professional email address, preferably on Gmail. 
            Your city of living is an information that interests your potential 
            employers. Don’t leave your home address.
                                </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });
    $(".digitalWork").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">List the ​job experiences​ that are relevant to the position you’re applying for. 
            If you’re currently working, your current job titles. 
            Explain your responsibilities and projects and list the strategies and projects you created or worked on.
            <br><br>
            Dates – a time frame in which you have been on a certain job title. If you are still working there, leave a hyphen ( - ). Leave your most recent experience first, and the oldest ones last. Enable the reader to see 
            what he needs to about your experience right away. Describe every job title with a few words about your most relevant experiences connected to the title you’re applying for.
            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".digitalEdu").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Under education, list only the ​relevant studies and courses​, like university degree or Digital Marketing Academy. Don’t write where you went to high school.
            <br><br>
            Don’t be afraid to include a “Self-Study” where you can list all the courses, conferences, workshops and webinars that you used to teach yourself about digital marketing. Don’t include everything – just the education that is relevant and necessary for the position you are applying for.
                </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".digitalSkills").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags"> Analyze what your ​key skills​ are. Make sure to list the skills you can shine in from day one. Showcase all the tools and technologies you know how to use​.
             <br><br>Everything that’s useful to a marketer: from Typeform and Canva, to Photoshop and Data Studio. Link campaigns you worked on If possible.
                    </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".digitalAch").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags"> Tip: Highlight the key achievements you have presented on your CV so the hiring manager can catch them very quickly. <br><br>
            Use numbers.​ If you helped a social media page gain a lot of followers, put the number in. If your campaign influenced a spike in sales, write in the percentage. Also, explain how you got there too.
            
                        </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });
    $(".digitalLang").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags"> All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use expressions such as “fluent in”, “speaking level of”, “native language” and similar.
                 </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });



    $(".designName").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags"> Write your resume in the language that you would use at your workplace. This is a great chance to show the company’s representatives that you can express yourself.
            <br><br>
            One CV isn’t suitable for every job position. Adapt your CV for the job position you’re applying for.
            <br>
            <br>
            Put a photo in a circle frame. It should be professional – made with a good camera and showing you in a
            warm light. It’s better to send a CV without a photo, than with one that makes you seem unprofessional.
            <br><br>
            Tip: Play with the font size. The visual part of the CV is also important, so use different colors and dimensions.
            <br><br>
            Advice:​ This builder is a great start to help you with the content of the CV, but try making it in Photoshop or Illustrator.
            <br><br>
            Templates aren’t suitable for a designer, except if you are applying to a job call that explicitly wants that format. 
                     </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".designAbout").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Write a short intro that truly represents you – not a cheesy quote, but something you truly believe in.
                </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });
    $(".designWork").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags"> Describe every ​job experience​ with a few words about your most relevant responsibilities and projects connected to the title you’re applying for.
            <br>
            <br>
            Dates are a time frame in which you have been on a certain job title. If you are still working there, leave a hyphen ( - ). First write your most recent experience, and the oldest ones last. We want to enable the reader to see what he needs to about your experience right away. 
                </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".designContact").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests your potential employers. Don’t leave your home address.
            <br>
            <br>
            Leave a link to your LinkedIn profile, or Behance/Dribbble/WiX. Make sure it’s clickable, and shorten it  
                    </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".designEdu").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">List relevant ​education​, 
            including workshops or lectures you have visited. 
            If you have a bachelor in Sports, and now you are applying as a designer because 
            you finished a course, the course should be the highest in your “education” section. Don’t put in high and elementary school. 
            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".designSkills").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags"> List all the ​skills, tools and technologies​ that you know well.
            <br>
            <br>
            All languages, even those you don’t speak fluently, can help you get a certain position. Use expressions such as “fluent in”, “speaking level of”, “native language” and similar.
            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });





    /***************************************************************************************** */

    //LAIKA on hoover
    $(".basicInfo").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Tip: Make sure you leave an email that you check regularly
                </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    //Social links
    $(".linksSocial").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn,
                Facebook, Stack Overflow, GitHub, your personal website etc.)
                </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    //Purpose
    $(".purpose").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Be realistic when choosing the reason why you have a portfolio on Laika. This will help recruiters know
            whether you are suitable for the position on the long run.
                    </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    //Industry
    $(".industry").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">You can only pick 1 industry out of the given 9 (Software Engineering, Design, Marketing and
                Communication, Data Science, IT and Sysadmin, Sales and Business Development, HR and Recruitment,
                Project and Product Management, Customer Support).
                    </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    //Work

    $(".work").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Work experience is not mandatory, but it helps companies know what kind of experience and in which
            industry you have.
                    </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    //Education
    $(".education").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Education is also not mandatory, but it adds weight to your portfolio if you have any academic
            knowledge.
                    </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    //Level of experience
    $(".lexperience").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Please be honest when selecting the level of your experience.
                    </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    //Salary
    $(".salary").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Select your desired salary. Don’t try to be too accessible, but please be realistic – make sure you
            desired salary is in accordance to your experience.
            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    //Job Plan
    $(".jobPlan").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">You can choose multiple choices for your desired job plan. 
            <br>
            You can choose out of four locations, or multiple.
            <br>
            You can choose between a job in office, remote, or both.
            <br>
            Let the companies know what is your current job title.

            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    /****************************************LINKEDIN******************************/
    $(".linkedCoverImg").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Choose a cover image that looks bold,professional and sophisticated. 
            <br>
            Don't use inappropriate content, or don't use a cover image at all.
            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".linkedProfileImg").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">You shoud use a professional looking photo, smile and have a clear face photo.
                </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".linkedAbout").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">  Make sure that your title matches your skills. E.g., if you’re an entry level PHP developer, don’t say that
            you’re a PHP Expert. Skip the abbreviations and titles – keep it short and modest.
            <br>
            Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and
            inspiration, try to make the ‘about’ section as personal and as reflective of you as possible.
            <br>
            Use the new “Open for business” feature. State your area of expertise and industry, to let recruiters
            know they can reach you.
            <br>
            Don’t write in things that you wouldn’t like to happen. For example, if you say you work good under
            pressure, employers might have an ace up their sleeve when stacking a lot of work with a short deadline,
            because you said so. Value your skills and free time accordingly.
            <br>
            <br>
            List all your relevant accomplishments. Don’t say you have a black belt in karate, but mention an award
            from a hackaton.
            <br>
            <br>
            Put in the skills you are most experienced in, so you can be endorsed from other people.
            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".linkedArticles").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Like or comment on articles you find of value to your network;
                <br>
                Write original thoughts or ask illuminating questions; <br>
                Share a insightful, tasteful quotes; <br>
                Announce certifications you earned; <br>
                Contribute to a growing discussion; <br>
                Post videos that are relevant to you occupation and industry.
                </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });

    $(".linkedExperience").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Explain every work experience you’ve had in detail – what were your obligations and tasks, what was
            your job title, which technologies and tools did you use etc. <br>
            Don’t be shy on listing experience that isn’t connected to your current profession. Volunteering at a
            local community center, summer jobs, projects you were a part of, pro bono work you did to improve
            your skills and gain experience – everything counts. Plus, every experience serves as proof to your work
            ethics and adaptability.
            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });
    $(".linkedEdu").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Under education, list all the formal and non-formal education you have, with focus on the education
            that is relevant to your current title. For example, if you put Brainster Coding Academy as an education,
            list all the modules and projects you have worked on. Make sure to list your major and
            bachelor/master/doctor thesis subject under the university education. <br><br>
            Tip: If you have no experience and education to build up your profile, do some pro bono work or
            volunteer. You can help someone, and at the same time enrich your portfolio.
            </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });
    $(".linkedInt").hover(
        function() {
            $('.infoOnHover').html($(`<p class="infoTags">Tip: Add connections from the same field of work as you; even people you don’t know personally. That
            way, recruiters have a bigger chance of coming across your profile.
            <br>
            <br>
            Tip: Ask friends and coworkers to endorse you.
                </p>`));
        },
        function() {
            $('.infoOnHover').html($(""));
        });





    /**********************************END OF HOVER INFO********************************************** */
    
    /******Download functonality for all CVs (the download version is not ideal there are some issues with dynamically generated code, 
     * thus the CV sometimes gets cut off on seperate parts ) ********/
    
    // download cv1
    $(document).on('click', '#downloadBtnCV1', function() {
        $('.fa-remove').hide();
        $('.addExperience').hide();
        $('.addJob').hide();
        $('.addAchievement').hide();
        $('.label-info span').hide();
        $('.fa').hide();

            var test = document.getElementById('cvOneContainer');
            domtoimage.toPng(test)
                .then(function (blob) {
                    var pdf = new jsPDF('p', 'mm');
                    pdf.addImage(blob, 'PNG', 0, 0);
                    pdf.save("cv.pdf");
                    // that.options.api.optionsChanged();
                });

    });

    //download cv2
    $(document).on('click', '#downloadBtnCV2', function() {
        $('.fa-remove').hide();
        $('.addExperienceCv2').hide();
        $('.addJobCv2').hide();
        $('.addEducation').hide();
        $('.addSkill').hide();
        $('.addProject').hide();
        $('.addLanguage').hide();
        $('.label-info span').hide();
        $('.fa').hide();


        var test = document.getElementById('cvTwoContainer');
            domtoimage.toPng(test)
                .then(function (blob) {
                    var pdf = new jsPDF('p', 'mm');
                    pdf.addImage(blob, 'PNG', 0, 0);
                    pdf.save("cv.pdf");
                    // that.options.api.optionsChanged();
                });


    })

    //download cv3
    $(document).on('click', '#downloadBtnCV3', function() {
        $('.fa-remove').hide();
        $('.addExperience').hide();
        $('.addJob').hide();
        $('.addEducationCV3').hide();
        $('.addAchievement').hide();
        $('.addLanguageCV3').hide();
        $('.label-info span').hide();
        $('.fa').hide();

        var test = document.getElementById('cvThreeContainer');
            domtoimage.toPng(test)
                .then(function (blob) {
                    var pdf = new jsPDF('p', 'mm');
                    pdf.addImage(blob, 'PNG', 0, 0);
                    pdf.save("cv.pdf");
                });
    });

    //download cv4
    $(document).on('click', '#downloadBtnCV4', function() {
        $('.fa-remove').hide();
        $('.addExperienceCv4').hide();
        $('.addJobCv4').hide();
        $('.addEducation').hide();
        $('.addSkillCv4').hide();
        $('.fa').hide();
        

        var test = document.getElementById('cvFourContainer');
            domtoimage.toPng(test)
                .then(function (blob) {
                    var pdf = new jsPDF('p', 'mm');
                    pdf.addImage(blob, 'PNG', 0, 0);
                    pdf.save("cv.pdf");
                });
    })

});