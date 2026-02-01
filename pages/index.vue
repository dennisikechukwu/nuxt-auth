<template>
  <div class="container">
    <!-- Loading State -->
    <div v-if="status === 'loading'" class="loading">
      <p>Loading...</p>
    </div>

    <!-- Logged In State -->
    <div v-else-if="status === 'authenticated'" class="profile">
      <img 
        :src="data?.user?.image" 
        alt="User Avatar" 
        class="avatar"
      />
      <h1>Welcome, {{ data?.user?.name }}! 👋</h1>
      <p class="email">{{ data?.user?.email }}</p>
      
      <button @click="signOut()" class="btn logout-btn">
        🚪 Log Out
      </button>
    </div>

    <!-- Logged Out State -->
    <div v-else class="login-section">
      <h1>Welcome to My App</h1>
      <p>Please sign in to continue</p>
      
      <button @click="signIn('google')" class="btn google-btn">
        <img 
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
          alt="Google" 
          class="google-icon"
        />
        Sign in with Google
      </button>
    </div>
  </div>
</template>

<script setup>
const { data, status, signIn, signOut } = useAuth()
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.loading {
  color: white;
  font-size: 1.5rem;
}

.profile {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #667eea;
  margin-bottom: 1rem;
}

.profile h1 {
  margin: 0.5rem 0;
  color: #333;
}

.email {
  color: #666;
  margin-bottom: 1.5rem;
}

.login-section {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.login-section h1 {
  margin-bottom: 0.5rem;
  color: #333;
}

.login-section p {
  color: #666;
  margin-bottom: 2rem;
}

.btn {
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.google-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  border: 2px solid #ddd;
  color: #333;
}

.google-btn:hover {
  border-color: #667eea;
}

.google-icon {
  width: 20px;
  height: 20px;
}

.logout-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}
</style>