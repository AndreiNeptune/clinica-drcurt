import { createClient } from '@supabase/supabase-js';

// Inițializare Supabase Client folosind variabilele de mediu Netlify
// Notă: Netlify va injecta aceste valori în timpul build-ului
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Ascultăm evenimentul de submit pe formular
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form-programare');
    
    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerText;

            // 1. Dezactivează butonul pentru a preveni trimiterile multiple
            submitButton.disabled = true;
            submitButton.innerText = 'Se trimite...';

            // 2. Preluăm datele folosind FormData
            const formData = new FormData(event.target);
            const data = {
                nume: formData.get('nume'),
                telefon: formData.get('telefon'),
                email: formData.get('email'),
                mesaj: formData.get('mesaj')
            };

            try {
                // 3. Trimitem datele către Supabase (.insert)
                const { error } = await supabase
                    .from('programari')
                    .insert([data]);

                if (error) throw error;

                // 4. Succes: Afișează mesaj, curăță formularul și reîntreabă
                alert('Cererea a fost trimisă cu succes!');
                form.reset();

                const reintrabare = confirm('Dorești să mai trimiți o altă cerere?');
                if (reintrabare) {
                    console.log('Utilizatorul dorește să mai trimită o cerere.');
                }

            } catch (error) {
                // 5. Eroare: Afișăm alerta pentru debug
                alert('Eroare: ' + (error.message || error));
                console.error('Debug Supabase Error:', error);
            } finally {
                // Reactivăm butonul
                submitButton.disabled = false;
                submitButton.innerText = originalButtonText;
            }
        });
    }
});
