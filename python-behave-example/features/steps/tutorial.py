from behave import *


@given('we have behave installed')
def step1(context):
    pass


@when('we implement a test')
def step2(context):
    assert True is not False


@then('behave will test it for us!')
def step3(context):
    assert context.failed is False
