document.addEventListener('DOMContentLoaded', event => {
    const app = firebase.app();
    const db = firebase.firestore();
    const productsRef = db.collection('products')

    const query = productsRef.where('price', '>', 2000)

    query.get()
        .then(products => {
        console.log(products)
        products.forEach(doc => {
            data = doc.data()
            document.write(`${data.name} at $${data.price} <br>`)
        })


    })
});

function update(e) {
    const db = firebase.firestore();
    const post = db.collection('posts').doc('firstpost');
    post.update({ title: e.target.value })
}

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(result => {
        const user = result.user;
        document.write(`Hello ${user.displayName}`);
        console.log(user);
    }).catch(console.log);
}