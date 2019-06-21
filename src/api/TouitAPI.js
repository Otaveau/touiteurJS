class TouitApi {

  
  static httpGetMessages(success, error, ts) {
    fetch("http://touiteur.cefim-formation.org/list?ts="+ts)
      .then(res => res.json())
      .then((result) => {success(result);
      },
      (err) => {error(err);
    })

  }
  
  static httpPostMessages = (name, message) => {
    fetch("http://touiteur.cefim-formation.org/send", {
        method: 'POST',
        headers: {
          'Content-Type': "application/x-www-form-urlencoded",
        },
        body: "name=" +
        encodeURIComponent(name) +
        "&message=" +
        encodeURIComponent(message)
    }).then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if(data.success){alert('Message sent')}
      else{alert(data.error)}
    })
   
  }

  static httpGetTrending(success, error) {
    fetch("http://touiteur.cefim-formation.org/trending")
      .then(res => res.json())
      .then((result) => {success(result);
      },
      (err) => {error(err);
      })
    }
  
  static httpGetInfluencers(success, error) {
    fetch("http://touiteur.cefim-formation.org/infuencers")
      .then(res => res.json())
      .then((result) => {success(result);
      },
      (err) => {error(err);
      })
    }
}

export default TouitApi;