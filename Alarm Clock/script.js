setInterval(() => {
    const date = new Date;
    let divider = " : ";
    document.querySelector("#H").innerHTML = date.getHours() + divider;
    document.querySelector("#M").innerHTML = " " + date.getMinutes() + divider;
    document.querySelector("#S").innerHTML = " " + date.getSeconds();
  }, 999)
  let sound = new Audio("https://freesound.org/data/previews/316/316847_4939433-lq.mp3"), hour, minute, second;
  const clear = () => {
    sound.loop = false;
    sound.pause()
    try {
      hour.value = ("")
      minute.value = ("")
      second.value = ("")
    }
    catch {
      show(strong = "Warning :", text = "Input field is empty", role = "danger")
      console.log(new Error("Input field is empty"))
    }
  }
  const show = async (strong, text, role = "success") => {
    document.querySelector("#show").innerHTML = ` <div class="alert alert-${role} alert-dismissible fade show alert-shower" role="alert">  <strong>${strong} </strong> ${text} <button type="button" class="close" data-dismiss="alert" aria-label="Close">    <span aria-hidden="true">&times;</span> </button></div>`;
  }
  const submit = async () => {
    hour = document.querySelector("#h");
    minute = document.querySelector("#m");
    second = document.querySelector("#s");
    sound.loop = true;
    if ((second.value + minute.value + hour.value) > 0) {
      setTimeout(() => {
        try {
          sound.play()
          show(strong = "Success :", text = `Alarm is  set for ${hour.value + minute.value + second.value} Time`)
        }
        catch {
          console.log(new error("Here is an error : system can't play sound"));
        }
      }, 1000 * (((hour.value) * 120) + ((minute.value) * 60) + (second.value)));
    } else {
      show(strong = "Warning :", text = "Input field is empty", role = "danger")
      console.warn("Input field is empty")
    }
  }
  
  document.addEventListener("keydown", (element) => {
    if (element.key == "s" && element.altKey == true) {
      submit()
    }
    if (element.key == "P" && element.altKey == true) {
      clear()
      show(strong = "Success :", text = "Alarm is Pause")
    }
  });
  (document.getElementById("set")).addEventListener("submit", async (element) => {
    element.preventDefault();
    submit()
  })
  document.querySelector("#pause").addEventListener("click", async (element) => {
    element.preventDefault();
    clear()
    show(strong = "Success :", text = "Alarm is Pause")
  })
  