export async function logout() {
    try {
        const response = await fetch('/api/auth/logout', {
            method: 'POST',
        });

        if (response.ok) {
            window.location.href = '/admin/login';
        }
    } catch (error) {
        console.error('Logout error:', error);
    }
}