const app = Sammy('#main', function (){
    this.use('Handlebars', 'hbs');

    this.get('#/index.html', () => {
        this.swap('<h2>Home Page</h2>');
    });
    this.get('#/about', () => {
        this.swap('<h2>About Page</h2>');
    });
    this.get('#/contact', (context) => {
        this.swap('<h2>Contact Page</h2>');
    });
    this.post('#/login', (context) => {
        console.log(context.params);
        console.log(context.params.username);
        console.log(context.params.password);
        this.swap(`<h2>Username is: ${context.params.username}</h2><br>
        <h2>Password is: ${context.params.password}</h2>`);
    });
    this.get('#/hello/:name', (ctx) => {
        ctx.title = 'Hello';
        ctx.name = ctx.params.name;
        ctx.partial('templates/greeting.hbs');
    });
});


$(() => {
   app.run();
});

