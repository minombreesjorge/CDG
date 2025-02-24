$(document).ready(function() {
    $('#categoriasTable').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/2.0.2/i18n/es-ES.json"
        },
        "columnDefs": [
            { "type": "num", "targets": 0 },
            {
            "orderable": false, 
            "targets": 2 
        }]
    });

    $('#productosTable').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/2.0.2/i18n/es-ES.json"
        },
    "columnDefs": [
        { "type": "num", "targets": 0 }, 
        { "type": "num-fmt", "targets": [4, 5] }, 
        { "type": "currency", "targets": 6 }, 
        { "orderable": false, "targets": 7 } 
    ]
    });


    $('#proveedoresTable').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/2.0.2/i18n/es-ES.json"
        },
        "columnDefs": [
            { "type": "num", "targets": 0 }, 
            {
            "orderable": false, 
            "targets": 2 
        }]
    });
});