import React from 'react';

const Footer: React.FC = () => {
	return (
		<div className='mt-4'>
			<footer className='text-center text-lg-start bg-light text-muted'>
				<section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'></section>

				<section className=''>
					<div className='container text-center text-md-start mt-5'>
						<div className='row mt-3'>
							<div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
								<h6 className='text-uppercase fw-bold mb-4'>
									<i className='fas fa-gem me-3'></i>University
								</h6>
								<p>
									A university is an institution of higher education, usually
									comprising a college of liberal arts and sciences and graduate
									and professional schools and having the authority to confer
									degrees in various fields of study.
								</p>
							</div>

							<div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
								<h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
								<p>
									<a href='#!' className='text-reset'>
										Page 1
									</a>
								</p>
								<p>
									<a href='#!' className='text-reset'>
                                    Page 2
									</a>
								</p>
								<p>
									<a href='#!' className='text-reset'>
                                    Page3
									</a>
								</p>
								<p>
									<a href='#!' className='text-reset'>
                                    Page 4
									</a>
								</p>
							</div>

							<div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
								
								<p className='mt-5'>
									<a href='#!' className='text-reset'>
                                    Page 5
									</a>
								</p>
								<p>
									<a href='#!' className='text-reset'>
                                    Page 6
									</a>
								</p>
								<p>
									<a href='#!' className='text-reset'>
                                    Page 7
									</a>
								</p>
								<p>
									<a href='#!' className='text-reset'>
                                    Page 8
									</a>
								</p>
							</div>

							<div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
								<h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
								<p>
									<i className='fas fa-home me-3'></i> Paris 
								</p>
								<p>
									<i className='fas fa-envelope me-3'></i>
									stage@stage.com
								</p>
								<p>
									<i className='fas fa-phone me-3'></i> + 00 111 222 33
								</p>
								<p>
									<i className='fas fa-print me-3'></i> + 00 111 555 66
								</p>
							</div>
						</div>
					</div>
				</section>

				<div
					className='text-center p-4'
					style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
					© 2021 Copyright
					
				</div>
			</footer>
		</div>
	);
};

export default Footer;
