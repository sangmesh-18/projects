const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex flex-col sm:flex-row sm:min-w-[320px] md:min-w-[400px] mx-auto'>
			{/* Male option */}
			<div className='form-control sm:w-1/2 md:w-1/3 mb-4 sm:mb-0'>
				<label
					className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}
				>
					<span className='text-white'>Male</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
				</label>
			</div>

			{/* Female option */}
			<div className='form-control sm:w-1/2 md:w-1/3'>
				<label
					className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}
				>
					<span className='text-white'>Female</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
				</label>
			</div>
		</div>

	);
};

export default GenderCheckbox