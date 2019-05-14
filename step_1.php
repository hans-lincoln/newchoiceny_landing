<?php include('templates/header.php'); ?>
  <section class="information">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6 col-sm-12">
          <h1>Enter your information</h1>
          <p>Your privacy is important to us. This info is required to verify your identity and submit your request to the union.</p>
        </div>
        <div class="col-md-6 col-lg-6 col-sm-12 text-right">
          <div class="information_inner">
            <div class="progress_container">
              <div class="d-flex align-items-center">
                <div class="progress_item_progress"></div>
                <div class="progress_item"></div>
                <div class="progress_item"></div>
              </div>
              <label>1/3 Your Information</label>
            </div>
            <form class="information_form" action="step_2" method="post">
              <div class="row">
                <div class="col-md-6 col-first-name">
                  <input type="text" placeholder="First Name*" class="form-control" name="first_name" required />
                </div>
                <div class="col-md-6 col-last-name">
                  <input type="text" placeholder="Last Name*" class="form-control" name="last_name" required />
                </div>
                <div class="col-md-12">
                  <input type="email" placeholder="Email*" class="form-control" name="email" required />
                </div>
                <div class="col-md-12">
                  <input type="text" placeholder="Phone number*" class="form-control" name="phone_number" required />
                </div>
                <div class="col-md-12">
                  <input type="hidden" value="<?php echo isset($_POST['zip']) ? $_POST['zip'] : ''; ?>" name="zipcode" />
                  <input type="submit" value="Continue" class="btn btn-primary" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</header>
<?php include('templates/footer.php'); ?>