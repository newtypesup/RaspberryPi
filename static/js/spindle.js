const tt = document.getElementById("test").innerText;
        let currentRPM = 0;
        const maxRPM = 30000;
        var changeRPM = 1000;
        x = 1000;
        // RPM 변경 함수
        function changeRPMValue(value) {
            // x 값이 1000 미만으로 내려가지 않도록 확인
            if (x + value >= 1000) {
                x += value;
            } else {
                x = 1000; // x 값을 0으로 설정
            }
            document.getElementById('changeRPM').innerText = x;
        }
        // 증가 버튼 클릭 시
        document.getElementById('up').addEventListener('click', function () {
            changeRPMValue(1000);
        });

        // 감소 버튼 클릭 시
        document.getElementById('down').addEventListener('click', function () {
            changeRPMValue(-1000);

        });

        $("select").on("click", function () {
            $("select").on("change", function () {
                console.log($("select").val())
                $("#warmingup_search").submit();
            });
        })

        let progressValue = 0;
        let duration = tt * 60;
        let intervalId;

        // 게이지 채우기 함수
        function fillProgress() {
            progressValue++;
            if (progressValue >= duration) {
                clearInterval(intervalId);
                progressValue = duration;
            }
            var percent = (progressValue / duration) * 100;
            document.getElementById('progress').style.width = percent + '%';
            document.getElementById('process').innerText = 'Purge : '+percent.toFixed(1) + '%';
            if (percent>=100.0){
                document.getElementById('process').innerText = 'Purge : 100.0%';
            }
            progress.classList.add("transition");
        }    

        document.getElementById('start').addEventListener('click', function () {
            document.getElementById('currentRPM').innerText = +x;
        });
        document.getElementById('warming').addEventListener('click', function () {
            progressValue = 0;
            intervalId = setInterval(fillProgress, 1000);
        });

        function fillstop() {
            clearInterval(intervalId);
            progressValue = 0;
            document.getElementById('process').innerText = "Purge : 0%";
            progress.classList.remove("transition");
            document.getElementById('progress').style.width=0;
        }

        $('#stop').click(function(){
            fillstop();  
        });