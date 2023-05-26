$(function() { 
    $('#download').click(function() {
        let options = {

        };
        
        let pdf = new jsPDF('p', 'pt', 'a4');
        
        pdf.addHTML($("#pdf"), 15, 15, options, function() {
            pdf.save('hola_chicos_2.pdf');
        });
    });
});
