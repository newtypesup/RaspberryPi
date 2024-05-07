const manual_btn = document.querySelectorAll("#m_btn1");

        function handleClick(evnet){
            manual_btn.forEach((e) => {
                e.classList.remove("btn_change_color");
            });
            if (event.target.id == "m_btn1"){
                event.target.classList.add("btn_change_color")
            };
            if (event.target.id == "img_color"){
                const test = document.querySelector("#"+event.target.id)
                console.log(test.parentElement)
            }
            
        }

        manual_btn.forEach((e) => {
            e.addEventListener("click", handleClick);
        });
        

        const btnTag = document.querySelector(".local_1");
        const btnfolderInput = document.querySelector("#folderInput");
        const tableBody = document.querySelector("#fileInfoTable tbody");

        btnTag.addEventListener("click",function(){
            btnfolderInput.click();
        });

        btnfolderInput.addEventListener("change", function(event){
            const files = event.target.files;
            clearTable();
            for(let i = 0; i < files.length; i++){
                addFileInfoToTable(files[i]);
            }
        });

        function clearTable(){
            tableBody.innerHTML = "";
        }

        function addFileInfoToTable(file){
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${file.name}</td>
                <td>${(file.size / 1024).toFixed(2) + 'KB'}</td>
                <td>${new Date(file.lastModified).toLocaleString()}</td>
            `;
            tableBody.appendChild(newRow);
        }


        const loadButton = document.getElementById("loadButton");
        const popup = document.getElementById("popup");
        const closeButton = document.getElementById("closeButton");

        loadButton.addEventListener("click", function() {
            popup.style.display = "block";
        });

        closeButton.addEventListener("click", function() {
            popup.style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        });