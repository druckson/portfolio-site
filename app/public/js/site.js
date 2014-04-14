(function(data) {
    angular.module("Resume", [])
        .controller("ResumeController", function($scope) {
            for (k in data) {
                $scope[k] = data[k];
            }
    });
})({
    "name": "Daniel Erickson",
    "skills": {
        "Programming Languages": [
            "C#",
            "Python",
            "Javascript",
            "Lua",
            "C",
            "C++",
            "Go",
            "Rust",
            "Java",
            "D",
            "Scheme",
            "ML",
            "Squirrel"
        ],
        "Frameworks and Technologies": [
            "Django",
            ".NET",
            "NodeJS",
            "OpenGL/GLSL",
            "OpenCL",
            "Rhino ETL",
            "KnockoutJS",
            "AngularJS",
            "Unity3D"
        ],
        "Development Tools": [
            "Vim",
            "Git",
            "SVN",
            "Visual Studio",
            "Eclipse IDE",
            "Unity3D"
        ],
        "Testing and Deployment Tools": [
            "NUnit",
            "Jenkins CI",
            "Grunt",
            "ChaiJS",
            "MochaJS",
            "Browserify"
        ],
        "Operating Systems": [
            "Arch Linux",
            "Mac OS",
            "Ubuntu",
            "Windows",
            "HPUX",
            "Sun OS",
            "AIX"
        ]
    },
    "experience": [
        {
            "position": "Contract Software Developer",
            "company": "Lost Creek Consulting Inc.",
            "location": "Springfield, OR",
            "date": "2005-2014 (intermittent)",
            "duties": [
                "Designed and developed client-facing applications used to manage electronic medical records systems.",
                "Worked with analysts and other developers to optimize and redesign internal processes and tools.",
                "Tuned and maintained pre-existing applications."
            ]
        },
        {
            "position": "Software Developer",
            "company": "Concentric Sky Inc. - Eugene, OR",
            "date": "April 2009 - August 2011",
            "duties": [
                "Designed database schemas and wrote back-end and front-end code for interactive websites.",
                "Deployed websites to a range of host servers, both internal and externally colocated.",
                "Upgraded and maintained websites.",
                "Collaborated directly with clients, and with project managers and designers to ensure that websites matched specifications.",
            ]
        },
        {
            "position": "Intern Software Developer",
            "company": "Prime Factors Inc. - Eugene, OR",
            "date": "June 2008 - October 2009",
            "duties": [
                "Wrote code samples and foreign function interfaces in C#, Visual Basic and Java for several information security products.",
                "Wrote and ran tests required for NIST validation of the AES encryption code used in the EncryptRIGHT product.",
                "Assisted in the development and documentation of EncryptRIGHT."
            ]
        }
    ]
});
