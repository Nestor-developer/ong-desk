$(document).ready(function(){
    $(document).on('click', '#btnNuevoAlineamiento2', function(){
        $("#tablaAlineamiento2")
            .append
            (
                $('<tr>')
                    .append
                    (
                        $('<td>')
                            .append
                            (
                                $('<input>').attr('type', 'text').addClass('form-control')
                            )
                    )
                    .append
                    (
                        $('<td>')
                            .append
                            (
                                $('<input>').attr('type', 'text').addClass('form-control')
                            )
                    )
                    .append
                    (
                        $('<td>')
                            .append
                            (
                                $('<input>').attr('type', 'text').addClass('form-control')
                            )
                    )
                    .append
                    (
                        $('<td>')
                            .append
                            (
                                $('<input>').attr('type', 'text').addClass('form-control')
                            )
                    )
                    .append
                    (
                        $('<td>').addClass('text-center')
                            .append
                            (
                                $('<div>').addClass('btn btn-danger eliminarTr').text('Eliminar')
                            )
                    )
            );
    });
    
    // Eliminar un tr de la tabla, osea un renglon de los que vas agregando
    $(document).on('click', '.eliminarTr', function(){
        $(this).closest('tr').remove();
    });
})
