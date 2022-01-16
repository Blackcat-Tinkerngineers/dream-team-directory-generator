class employee_name {
    constructor(name, id, email) {
        this.state = {name:'', role:'', phone:'', email:'', school:'',ID:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        const { name, role, phone, email,school, ID } = this.state
        event.preventDefault();
        alert(`
          ____Employee Details____\n
          Name : ${name}
          Role : ${role}
          Email : ${email}
          Phone : ${phone}
          School : ${school}
          ID : ${ID}
        `)
      }

       handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='name'>Employee Name</label>
          <input 
            name='Name'
            placeholder='Employee Name' 
            value = {this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='role'>Employee Role</label>
          <input
            name='role' 
            placeholder='Employee Role'
            value={this.state.role}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Employee Email</label>
          <input
            name='email' 
            placeholder='Employee Email'
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='phone'>Employee Number</label>
          <input
            name='phone' 
            placeholder='Employee Phone'
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='school'>Employee School</label>
          <input
            name='school' 
            placeholder='Employee School'
            value={this.state.school}
            onChange={this.handleChange}
          />
        </div>
        <div>
        <label htmlFor='id'>Employee ID</label>
        <input
          name='id' 
          placeholder='Employee ID'
          value={this.state.id}
          onChange={this.handleChange}
        />
      </div>
      <div>
          <button>Create Account</button>
        </div>
      </form>
    )
  }
}
  
module.exports = Employee