
window.onload = function() {
    const app = new Vue({
        el: '#app',
        data: {
            notes: null,
            editingNote: null,
        },
        methods: {
            editNewNote: function () { this.editingNote = new Note(); },
            deleteNote: function ( note ) { axios.delete('/notes/' + note.id).then(() => this.reloadNotes()) },
            reloadNotes: function () { axios.get('/notes').then(response => this.notes = response.data); },
            cancelNoteEdit: function () {
                this.editingNote = null;
                this.reloadNotes();
            },
        },
        mounted: function () { this.reloadNotes(); },
    })
};
