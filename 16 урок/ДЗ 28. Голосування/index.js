function createCounter(smile, counter) {
	let count = 0;

	const incrementCounter = () => {
	  count += 1;
	  counter.textContent = count;
	};

	smile.onclick = incrementCounter;
  }

  const smile1 = document.querySelector("#smile1");
  const counter1 = document.querySelector("#counter1");
  createCounter(smile1, counter1);
  
  const smile2 = document.querySelector("#smile2");
  const counter2 = document.querySelector("#counter2");
  createCounter(smile2, counter2);
  
  const smile3 = document.querySelector("#smile3");
  const counter3 = document.querySelector("#counter3");
  createCounter(smile3, counter3);
  
  const smile4 = document.querySelector("#smile4");
  const counter4 = document.querySelector("#counter4");
  createCounter(smile4, counter4);
  
  const smile5 = document.querySelector("#smile5");
  const counter5 = document.querySelector("#counter5");
  createCounter(smile5, counter5);
  