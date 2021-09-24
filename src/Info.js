import React from 'react'
import './css/styles.css'
import ReactPlayer from 'react-player/youtube'

const info = () => {
  return (
    <div>
        <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Blaine Love - Portfolio</title>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>
       
        <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
        
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    <body id="page-top">
       
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top">Blaine Love</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="#signup">Contact</a></li>
                        <li class="nav-item"><a class="nav-link" target="_blank" href="https://drive.google.com/file/d/1-611yEXYt5DySzqfJ-KGmNyoKZ2r_y8C/view?usp=sharing">Resume</a></li>
                    </ul>
                </div>
            </div>
        </nav>
     
        <header class="masthead">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <h1 class="mx-auto my-0 text-uppercase">Blaine Love</h1>
                        
                        <a class="btn btn-primary" href="#about">About Me</a>
                    </div>
                </div>
            </div>
        </header>
       
        <section class="about-section text-center" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8">
                        <h2 class="text-white mb-4">About Me</h2>
                        <p class="text-white-50">
                        I'm passionate about technology and finding ways to use technology to improve daily life. At university I studied business with a focus in sales and business marketing. During this time I also taught myself to code as I've always believed programming is an important skill to have in any industry. I became more interested in software engineering, but the pandemic gave me the final push I needed to fully commit to a career move. I enrolled in Flatiron's Software Engineering Program which gave me the opportunity to further develop my skills and build full stack apps using Ruby, Ruby on Rails, Javascript, React, HTML, CSS, and APIs.
                        </p>
                    </div>
                </div>
                <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UWaDlb9WpmuL6HXRTLu6tISiqrj57soY6g&usqp=CAU" alt="..." />
            </div>
        </section>
        <h1>Projects</h1>
        <section class="projects-section bg-light" id="projects">
          
            <div>
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><ReactPlayer url='https://youtu.be/3gYYjpXD3zs'  /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Hobby Lobby</h4>
                                    <p class="mb-0 text-white-50">A Web App that I created that lets you create hobbies and with each hobby you can post many thoughts or feelings about the hobby inlding pictures</p>
                                    <hr class="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><ReactPlayer url='https://www.youtube.com/watch?v=JdEnZ_8elh0'class="img-fluid"  alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Sports</h4>
                                    <p class="mb-0 text-white-50">This Web app created with Ruby on Rails backend and a React frontend. Lets you post videos about these wacky sports select with full CRUD functionality. </p>
                                    <hr class="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6" ><ReactPlayer url='https://www.youtube.com/watch?v=o0sHYCRRyZs'class="img-fluid"  alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">How You Feelin</h4>
                                    <p class="mb-0 text-white-50">In This Web App you will be able to create to do lists. Within the lists you will be able to create tasks the you wish to compelete in the near future.  </p>
                                    <hr class="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        
       
        <section class="contact-section bg-black" id ="signup">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Address</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">333 Grand st. Apt. 1210</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fa fa-google"></i>
                                <h4 class="text-uppercase m-0">Email</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50"><a href="https://mail.google.com/mail/u/0/#inbox">Blainelove94@gmail.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Phone</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">+1 (517) 719-8733</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="social d-flex justify-content-center">
                    <a class="mx-2" href="https://www.facebook.com/blaine.love.9" target="_blank"><i class="fa fa-facebook"></i></a>
                    <a class="mx-2" href="https://www.linkedin.com/in/blaine-love/" target="_blank"><i class="fa fa-linkedin-square"></i></a>
                    <a class="mx-2" href="https://github.com/blainelove" target="_blank"><i class="fa fa-github"></i></a>
                </div>
            </div>
        </section>
        
   
       
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
        
        <script src="js/scripts.js"></script>
      
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
      
    </div>
  )
}

export default info

