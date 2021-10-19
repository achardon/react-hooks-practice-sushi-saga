

function Wallet({handleSubmit}) {

    return(
        <div className='wallet'>
            <h2>Wallet</h2>
            <form onSubmit={handleSubmit}>
                <label>Add $$</label>
                <input
                    type='number'
                    name='money'
                    aria-label='money'
                ></input>
                <input
                    type='submit'
                ></input>
            </form>
        </div>
    )
}

export default Wallet;