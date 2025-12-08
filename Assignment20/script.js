document.getElementById("daySelect").addEventListener("change", function () {
    const day = this.value;
    const output = document.getElementById("output");
    output.innerHTML = "Loading...";

    if (!day) {
        output.innerHTML = "";
        return;
    }

    fetch(`http://localhost:3000/timetable?day=${day}`)
        .then(res => res.json())
        .then(data => {
            output.innerHTML = "";

            if (data.length === 0) {
                output.innerHTML = `<div class="no-data">No classes today.</div>`;
                return;
            }

            data.forEach(cls => {
                output.innerHTML += `
                    <div class="class-box">
                        <strong>Subject:</strong> ${cls.subject} <br>
                        <strong>Faculty:</strong> ${cls.faculty} <br>
                        <strong>Time:</strong> ${cls.time}
                    </div>
                `;
            });
        })
        .catch(() => {
            output.innerHTML = `<div class="no-data">Error loading timetable.</div>`;
        });
});
