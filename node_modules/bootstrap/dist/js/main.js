document.addEventListener("DOMContentLoaded", function (event) {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)
        // show navbar
        nav.classList.toggle('show')
        // change icon
        // toggle.classList.toggle('bx-right')

        // add padding to body
        bodypd.classList.toggle('body-pd')
        // add padding to header
        headerpd.classList.toggle('body-pd')
        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                // show navbar
                nav.classList.toggle('show')
                // change icon
                // toggle.classList.toggle('bx-right')
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                headerpd.classList.toggle('body-pd')
            })
        }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))

    // Your code to run since DOM is loaded and ready

    // Call the dataTables jQuery plugin
    $(document).ready(function () {
        $('#dataTable').DataTable();
    });

    // Popover
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

    // Toast
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
            const toast = new bootstrap.Toast(toastLiveExample)

            toast.show()
        })
    }

    // editor js
    const editor = new EditorJS({
        holderId: 'editorjs',
        inlineToolbar: ['link', 'bold', 'italic'],
        tools: {
            header: {
                class: Header,
                inlineToolbar: true,
            },

            paragraph: {
                config: {
                    placeholder: "Let's write something here!"
                }
            },
            list: List
        },
        data: {
            "time": 1605730287940,
            "blocks": [
                {
                    "type": "header",
                    "data": {
                        "text": "Untitled."
                    }
                },
            ]
        }
    })

    const addBlock = type => {
        if (editor) {
            const index = editor.blocks.getBlocksCount() + 1
            editor.blocks.insert(type, undefined, undefined, index)
            editor.caret.setToLastBlock('start', 0)
        }
    }

    const bold = () => {
        document.execCommand('bold');
    }

    document.querySelector('#save').addEventListener('click', () => {
        console.log(editor)
        editor.save().then((outputData) => {
            console.log('Article data: ', outputData)
        })
        addBlock('header')
        bold()
    });

    // Docs: https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs.html

    // ckeditor 5
    ClassicEditor
        .create(document.querySelector('#editor'))
        .catch(error => {
            console.error(error);
        });


    // Test export data table

    /*! ColResize 0.0.11
    */


});




// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

// Days
var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
    greet = 'Good Morning Fin 🌞';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon Fin ⛅ ';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening Fin 🌛';

document.getElementById('greetings').innerHTML = '<b>' + greet + '</b>';

