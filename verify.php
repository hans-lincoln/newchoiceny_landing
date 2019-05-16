<?php
if (!isset($_GET['email'])) {
  header('location: ./');
}
?>
<?php include('templates/header.php'); ?>
  <!-- Event snippet for Edunity new page conversion page -->
  <script>
    gtag('event', 'conversion', { 'send_to': 'AW-747649581/Fd9sCPjtvJ0BEK30wOQC', 'transaction_id': '' });
  </script>
  <script>
    fbq('track', 'CompleteRegistration');
  </script>
  <script>
  pintrk('track', 'checkout', {
    value: 100
  });
  </script>
  <section class="information">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6 col-sm-12">
          <h1>Verify your email address</h1>
          <p>We just sent an email to <?php echo $_GET['email']; ?>. Please click the link in that email to verify you own this address and to continue.</p>
        </div>
        <div class="col-md-6 col-lg-6 col-sm-12">
          <img src="assets/images/verify.png" alt="Verify Your eamil" />
        </div>
      </div>
    </div>
  </section>
</header>
<?php include('templates/footer.php'); ?>
